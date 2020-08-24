#ifndef FALK_WIFI
#define FALK_WIFI

// THIS BLOCK NEEDED FOR WIFI / OTA UPDATES
#include <WiFi.h>
#include "ESPAsyncWebServer.h"
#include <ESPmDNS.h>
#include <Update.h>
#include <SPIFFS.h>
#include "esp_task_wdt.h"
#include "esp_int_wdt.h"
#include "ArduinoJson.h"

class WiFiManager {
  private:
  public:
    void begin();
    void loop();
    const char* getSSID();
    void enable();
};

#endif