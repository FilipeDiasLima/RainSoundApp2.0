import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { Audio } from 'expo-av'

interface PlayerContextData {
  isPlay: boolean
  loaded: boolean
  loading: boolean
  volume: number
  rain: boolean
  thunder: boolean
  wind: boolean
  playAudio: () => void
  pauseAudio: () => void
  toggleVolume: () => void
  toggleSound: () => void
  toggleTrigger: () => void
  toggleThunder: () => void
  toggleWind: () => void
  toggleRain: () => void
}

interface PlayerProviderProps {
  children: ReactNode
}

const RainTrack = require('../assets/chuva.mp3')
const ThunderTrack = require('../assets/trovao1.mp3')
const WindTrack = require('../assets/mixkit-scary-graveyard-wind-1157.mp3')

export const PlayerContext = createContext({} as PlayerContextData)

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [isPlay, setIsPlay] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [volume, setVolume] = useState(0.0)
  const [trigger, setTrigger] = useState(false)
  const [rain, setRain] = useState(false)
  const [thunder, setThunder] = useState(false)
  const [wind, setWind] = useState(false)

  let sound = useRef<Audio.Sound>(new Audio.Sound())
  let thunderSound = useRef<Audio.Sound>(new Audio.Sound())
  let windSound = useRef<Audio.Sound>(new Audio.Sound())

  async function playAudio() {
    try {
      const result = await sound.current.getStatusAsync()
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync()
        }
      }
    } catch (error) { }
  }

  async function playThunderAudio() {
    try {
      const result = await thunderSound.current.getStatusAsync()
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          thunderSound.current.playAsync()
        }
      }
    } catch (error) { }
  }

  async function playWindAudio() {
    try {
      const result = await windSound.current.getStatusAsync()
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          windSound.current.playAsync()
        }
      }
    } catch (error) { }
  }

  const pauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync()
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync()
        }
      }
    } catch (error) { }
  }

  const pauseThunderAudio = async () => {
    try {
      const result = await thunderSound.current.getStatusAsync()
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          thunderSound.current.pauseAsync()
        }
      }
    } catch (error) { }
  }

  const pauseWindAudio = async () => {
    try {
      const result = await windSound.current.getStatusAsync()
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          windSound.current.pauseAsync()
        }
      }
    } catch (error) { }
  }

  const stopAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync()
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.stopAsync()
          sound.current.unloadAsync()
        }
      }
    } catch (error) { }
  }

  const stopThunderAudio = async () => {
    try {
      const result = await thunderSound.current.getStatusAsync()
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          thunderSound.current.stopAsync()
          thunderSound.current.unloadAsync()
        }
      }
    } catch (error) { }
  }

  const stopWindAudio = async () => {
    try {
      const result = await windSound.current.getStatusAsync()
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          windSound.current.stopAsync()
          windSound.current.unloadAsync()
        }
      }
    } catch (error) { }
  }

  const toggleSound = () => {
    setIsPlay(!isPlay)
  }

  const LoadAudio = async () => {
    setLoading(true)
    const checkLoading = await sound.current.getStatusAsync()
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(RainTrack, {}, true)
        if (result.isLoaded === false) {
          setLoading(false)
          console.log('Error in Loading Audio')
        } else {
          setLoading(false)
          setLoaded(true)
        }
        playAudio()
        setIsPlay(!isPlay)
        sound.current.setIsLoopingAsync(true)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }

  const LoadThunderAudio = async () => {
    setLoading(true)
    const checkLoading = await thunderSound.current.getStatusAsync()
    if (checkLoading.isLoaded === false) {
      try {
        const result = await thunderSound.current.loadAsync(ThunderTrack, {}, true)
        if (result.isLoaded === false) {
          setLoading(false)
          console.log('Error in Loading Audio')
        } else {
          setLoading(false)
          setLoaded(true)
        }
        playThunderAudio()
        thunderSound.current.setIsLoopingAsync(true)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }

  const LoadWindAudio = async () => {
    setLoading(true)
    const checkLoading = await windSound.current.getStatusAsync()
    if (checkLoading.isLoaded === false) {
      try {
        const result = await windSound.current.loadAsync(WindTrack, {}, true)
        if (result.isLoaded === false) {
          setLoading(false)
          console.log('Error in Loading Audio')
        } else {
          setLoading(false)
          setLoaded(true)
        }
        playWindAudio()
        windSound.current.setIsLoopingAsync(true)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }

  const toggleVolume = async () => {
    if (volume < 1.0) {
      setVolume(volume + 0.2)
      await sound.current.setVolumeAsync(volume)
    } else {
      setVolume(0.2)
      await sound.current.setVolumeAsync(volume)
    }
  }

  const toggleTrigger = () => {
    setTrigger(!trigger)
  }

  const toggleRain = () => {
    setRain(!rain)
  }

  const toggleThunder = () => {
    setThunder(!thunder)
  }

  const toggleWind = () => {
    setWind(!wind)
  }

  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true
    })
    setRain(true)
    LoadAudio()
  }, [])

  useEffect(() => {
    if (rain) {
      LoadAudio()
    } else {
      stopAudio()
    }
  }, [rain])

  useEffect(() => {
    if (thunder) {
      LoadThunderAudio()
    } else {
      stopThunderAudio()
    }
  }, [thunder])

  useEffect(() => {
    if (wind) {
      LoadWindAudio()
    } else {
      stopWindAudio()
    }
  }, [wind])

  useEffect(() => {
    if (!isPlay) {
      pauseAudio()
      pauseThunderAudio()
      pauseWindAudio()
    } else {
      playAudio()
      playThunderAudio()
      playWindAudio()
    }
  }, [isPlay])

  useEffect(() => {
    stopAudio()
    stopThunderAudio()
  }, [trigger])

  return (
    <PlayerContext.Provider
      value={{
        isPlay,
        loaded,
        loading,
        volume,
        rain,
        thunder,
        wind,
        pauseAudio,
        playAudio,
        toggleSound,
        toggleVolume,
        toggleTrigger,
        toggleRain,
        toggleThunder,
        toggleWind
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}