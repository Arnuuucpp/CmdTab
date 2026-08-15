import React, { useEffect, useState } from 'react'
import './BatteryStatus.css'

const BatteryStatus = () => {
  const [battery, setBattery] = useState({
    level: 100,
    charging: false,
    supported: false,
  })

  useEffect(() => {
    if (typeof navigator === 'undefined' || !('getBattery' in navigator)) {
      setBattery((prev) => ({ ...prev, supported: false }))
      return
    }

    let batteryObject = null

    const updateBatteryState = () => {
      if (!batteryObject) return
      setBattery({
        level: Math.round(batteryObject.level * 100),
        charging: batteryObject.charging,
        supported: true,
      })
    }

    const init = async () => {
      try {
        batteryObject = await navigator.getBattery()
        updateBatteryState()

        batteryObject.addEventListener('levelchange', updateBatteryState)
        batteryObject.addEventListener('chargingchange', updateBatteryState)
      } catch (error) {
        setBattery({
          level: 100,
          charging: false,
          supported: false,
        })
      }
    }

    init()

    return () => {
      if (batteryObject) {
        batteryObject.removeEventListener('levelchange', updateBatteryState)
        batteryObject.removeEventListener('chargingchange', updateBatteryState)
      }
    }
  }, [])

  const isLow = battery.level <= 20 && !battery.charging

  if (!battery.supported) {
    return (
      <div className="battery-status unavailable" aria-label="Battery status unavailable">
        <div className="battery-icon">
          <div className="battery-fill" style={{ width: '0%' }} />
        </div>
        <span className="battery-percent">N/A</span>
      </div>
    )
  }

  return (
    <div className="battery-status" aria-label={`Battery ${battery.level}%`}>
      <div className={`battery-icon ${battery.charging ? 'charging' : ''} ${isLow ? 'low' : ''}`}>
        <div className="battery-fill" style={{ width: `${battery.level}%` }} />
        {battery.charging && <span className="bolt">⚡</span>}
      </div>
      <span className="battery-percent">{battery.level}%</span>
    </div>
  )
}

export default BatteryStatus