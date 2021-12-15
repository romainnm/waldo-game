import React from 'react'
import { useGlobalContext } from "../context";

function AlertsGame() {
    const {alert} = useGlobalContext()
    return (
      <div className={`alert alert-${alert.type}`}>
        <p>{alert.msgAlert}</p>
      </div>
    );
}

export default AlertsGame
