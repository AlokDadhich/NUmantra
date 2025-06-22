import type { Product, Category } from '../types';

export function initializeData() {
  const categories: Category[] = [
    { id: 1, name: "Arduino Boards", count: 5 },
    { id: 2, name: "Raspberry Pi", count: 5 },
    { id: 3, name: "Sensors", count: 5 },
    { id: 4, name: "Motors & Actuators", count: 5 },
    { id: 5, name: "Displays", count: 5 },
    { id: 6, name: "IoT & Wireless", count: 5 },
    { id: 7, name: "Power Supplies", count: 5 },
    { id: 8, name: "Electronic Components", count: 5 },
    { id: 9, name: "Robotics Kits", count: 5 },
    { id: 10, name: "Tools & Equipment", count: 5 },
    { id: 11, name: "Cables & Connectors", count: 5 },
    { id: 12, name: "Development Boards", count: 5 },
    { id: 13, name: "3D Printing", count: 5 },
    { id: 14, name: "LED & Lighting", count: 5 },
    { id: 15, name: "Audio & Sound", count: 5 },
    { id: 16, name: "Wearable Tech", count: 5 }
  ];

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Arduino UNO R4 WiFi",
      category: "Arduino Boards",
      price: 2499,
      originalPrice: 2999,
      image: "https://cdn3.f-cdn.com/files/download/197931628/arduino.jpg",
      rating: 4.8,
      reviews: 245,
      stock: 50,
      description: "Latest Arduino UNO R4 with built-in WiFi capability for IoT projects"
    },
    {
      id: 2,
      name: "ESP32-S3 DevKit",
      category: "Development Boards",
      price: 1899,
      originalPrice: 2199,
      image: "https://www.mgsuperlabs.co.in/estore/image/cache/data/NCD/NCD%20PR54-6/ESP32_1-600x400-500x500.png",
      rating: 4.7,
      reviews: 189,
      stock: 75,
      description: "Advanced ESP32-S3 with WiFi, Bluetooth, and enhanced processing power"
    }
  ];

  const productTemplates: Record<string, { name: string; price: number; description: string; image: string }[]> = {
    "Arduino Boards": [
      { 
        name: "Arduino Uno R3", 
        price: 2499, 
        description: "The classic Arduino development board for beginners and professionals",
        image: "https://store.arduino.cc/cdn/shop/files/ABX00021_03.front_1000x750.jpg?v=1727098283"
      },
      { 
        name: "Arduino Nano", 
        price: 1899, 
        description: "Compact Arduino board perfect for small projects and wearable electronics",
        image: "https://store.arduino.cc/cdn/shop/files/A000005_03.front_1000x750.jpg?v=1727098231"
      },
      { 
        name: "Arduino Mega 2560", 
        price: 3899, 
        description: "High-performance Arduino for complex embedded projects",
        image: "https://store.arduino.cc/cdn/shop/files/A000067_00.front_1000x750.jpg?v=1727098253"
      },
      { 
        name: "Arduino Leonardo", 
        price: 2299, 
        description: "Arduino board with built-in USB support",
        image: "https://m.media-amazon.com/images/I/71Xl7hDQiEL._SL1000_.jpg"
      },
      { 
        name: "Arduino Pro Mini", 
        price: 1299, 
        description: "Small and low-power board for compact applications",
        image: "https://m.media-amazon.com/images/I/81iJznLHOzL._SL1500_.jpg"
      },
      { 
        name: "Arduino Uno SMD", 
        price: 2199, 
        description: "SMD version of the classic Uno board for automation and IoT",
        image: "https://store.arduino.cc/cdn/shop/files/A000073_00.front_1000x750.jpg?v=1727098256"
      }
    ],
    "Raspberry Pi": [
      { 
        name: "Raspberry Pi 4 Model B", 
        price: 7500, 
        description: "Latest Raspberry Pi with 4GB RAM and improved performance",
        image: "https://cdn.soselectronic.com/productdata/fa/4f/3d4a1710/raspberry-pi-5-4gb-rpi5-4gb-single.jpg"
      },
      { 
        name: "Raspberry Pi Pico", 
        price: 699, 
        description: "Microcontroller board from Raspberry Pi Foundation",
        image: "https://robu.in/wp-content/uploads/2019/01/Raspberry-PI-Pico-4.jpg"
      },
      { 
        name: "Raspberry Pi 3 Model B+", 
        price: 4500, 
        description: "High-speed quad-core mini computer",
        image: "https://assets.raspberrypi.com/static/f2e9242911c5d63868b22a8f5d3da8a6/f2559/bef8cda3-64ea-4098-bf18-8e731a6e9a0d_3b%2B%2BAngle%2B2.webp"
      },
      { 
        name: "Raspberry Pi Zero W", 
        price: 1899, 
        description: "Compact version with built-in wireless",
        image: "https://robu.in/wp-content/uploads/2021/10/rpi-zero.jpg"
      },
      { 
        name: "Raspberry Pi Camera Module", 
        price: 2299, 
        description: "Official 8MP camera for Raspberry Pi boards",
        image: "https://robu.in/wp-content/uploads/2022/12/Raspberry-Pi-Camera-Module-3-Wide-1.jpg"
      },
      { 
        name: "Raspberry Pi Compute Module 4", 
        price: 8999, 
        description: "Compute-focused Pi for industrial systems",
        image: "https://images.thingbits.net/eyJidWNrZXQiOiJ0aGluZ2JpdHMtbmV0Iiwia2V5IjoiMmJlNm5ndjhoYm5pa3gyaWwybDR3d3B0aWJ1cCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTMwMCwiaGVpZ2h0Ijo5NzUsImZpdCI6ImNvdmVyIn19fQ==?_gl=1*wcm69b*_gcl_au*MjA5ODY4MzY2OC4xNzUwNTMyNTYw*_ga*NDI4MTgzODczLjE3NTA1MzI1NjA.*_ga_BQB4K4RMXW*czE3NTA1MzI1NjAkbzEkZzAkdDE3NTA1MzI1NjAkajYwJGwwJGgw"
      }
    ],
    "Sensors": [
      { 
        name: "DHT22 Temperature Sensor", 
        price: 799, 
        description: "Digital temperature and humidity sensor with high accuracy",
        image: "https://hobbycomponents.com/2963-large_default/mlink-dht22-temperature-and-humidity-sensor.jpg"
      },
      { 
        name: "HC-SR04 Ultrasonic Sensor", 
        price: 399, 
        description: "Distance measurement sensor for robotics applications",
        image: "https://robomart.com/wp-content/uploads/2024/12/RM000788.jpg"
      },
      { 
        name: "BMP280 Barometric Sensor", 
        price: 899, 
        description: "Pressure and altitude sensor with I2C/SPI",
        image: "https://robu.in/wp-content/uploads/2019/05/BMP280-Barometric-Pressure-and-Altitude-Sensor-I2CSPI-Module-4.jpg"
      },
      { 
        name: "IR Obstacle Avoidance Sensor", 
        price: 199, 
        description: "Infrared sensor for robot navigation",
        image: "https://robu.in/wp-content/uploads/2016/01/IR-sensor-Module-2.jpg"
      },
      { 
        name: "PIR Motion Detector", 
        price: 349, 
        description: "Motion detection for home automation",
        image: "https://cdn-learn.adafruit.com/assets/assets/000/000/503/original/proximity_pirsensor.jpg?1396763621"
      },
      { 
        name: "MQ-2 Gas Sensor", 
        price: 299, 
        description: "Detects LPG, smoke, methane, and CO gases",
        image: "https://robu.in/wp-content/uploads/2016/02/MQ-2-Smoke-LPG-Butane-Hydrogen-Gas-Sensor-Detector-Module-2.jpg"
      }
    ],
    "Motors & Actuators": [
      { 
        name: "SG90 Servo Motor", 
        price: 499, 
        description: "Micro servo motor for precise positioning in small projects",
        image: "https://m.media-amazon.com/images/I/61yfIwAxe0L._SL1421_.jpg"
      },
      { 
        name: "28BYJ-48 Stepper Motor", 
        price: 449, 
        description: "5V stepper motor with ULN2003 driver board",
        image: "https://robu.in/wp-content/uploads/2016/05/28BYJ-48-Stepper-Motor-DC-5V.jpg"
      },
      { 
        name: "DC Gear Motor", 
        price: 799, 
        description: "Geared DC motor with high torque output",
        image: "https://roboman.in/wp-content/uploads/2022/10/500-rpm.webp"
      },
      { 
        name: "MG996R Servo", 
        price: 1099, 
        description: "Heavy-duty servo motor for robotics",
        image: "https://robu.in/wp-content/uploads/2019/11/1277.jpg"
      },
      { 
        name: "Vibration Motor", 
        price: 199, 
        description: "Mini motor used in wearables or alerts",
        image: "https://robu.in/wp-content/uploads/2022/10/hg.12.png"
      },
      { 
        name: "NEMA 17 Stepper Motor", 
        price: 1299, 
        description: "Standard stepper motor for CNC and 3D printers",
        image: "https://m.media-amazon.com/images/I/617QPT7+sIL._SL1000_.jpg"
      }
    ],
    "Displays": [
      { 
        name: "1.3\" OLED I2C Display", 
        price: 499, 
        description: "OLED Display Module 128x64 with I2C interface",
        image: "https://robu.in/wp-content/uploads/2019/12/617730-1-scaled.jpg"
      },
      { 
        name: "TFT LCD 2.4\" Touchscreen", 
        price: 999, 
        description: "Touch-enabled TFT display for Arduino projects",
        image: "https://robu.in/wp-content/uploads/2020/06/2.4-inch-SPI-Interface-240x320-Touch-Screen-TFT-Display-Module-1.png"
      },
      { 
        name: "16x2 LCD Display", 
        price: 299, 
        description: "Classic character display module with I2C",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtdnMx2VrYjXMJ6CisaqZV9qT7MXRducaHkj32zz_bv6ifDUFo0vsRTx1kiSx2234CTwKrAoIwijsHxU6nlM9IGVocb4o_SzUhN_iKrieRk_Gd98MbsrkP_fQ"
      },
      { 
        name: "Nextion 2.4\" HMI Display", 
        price: 1899, 
        description: "Intelligent display with GUI support",
        image: "https://www.nextion.in/wp-content/uploads/2022/04/NX3224F024-2.webp"
      },
      { 
        name: "1.8\" SPI TFT Display", 
        price: 499, 
        description: "Compact SPI display for embedded systems",
        image: "https://m.media-amazon.com/images/I/41rMmSOY65L.jpg"
      },
      { 
        name: "7-Segment Display Module", 
        price: 179, 
        description: "4-digit LED display for numeric output",
        image: "https://robu.in/wp-content/uploads/2017/09/41n0DgK2KxL._SX342_.jpg"
      }
    ],
    "IoT & Wireless": [
      { 
        name: "ESP8266 WiFi Module", 
        price: 399, 
        description: "Low-cost WiFi microchip for IoT solutions",
        image: "https://www.electronicwings.com/storage/PlatformSection/TopicContent/211/icon/ESP8266%20Wifi.jpg"
      },
      { 
        name: "nRF24L01+ Module", 
        price: 299, 
        description: "2.4GHz wireless transceiver for short-range RF communication",
        image: "https://potentiallabs.com/cart/image/cache/catalog/2021/nrf24l01-module-1000x1000.jpeg"
      },
      { 
        name: "ESP32 WROOM-32", 
        price: 699, 
        description: "Dual-core WiFi + BLE module for IoT applications",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/4/303043897/EV/YZ/LE/86225228/esp-wroom-32-esp32-esp-32s-development-board-1000x1000.jpg"
      },
      { 
        name: "LoRa SX1278 Module", 
        price: 999, 
        description: "Long-range communication module for smart farming",
        image: "https://robu.in/wp-content/uploads/2021/12/598.jpg"
      },
      { 
        name: "SIM800L GSM Module", 
        price: 799, 
        description: "GSM/GPRS communication module for SMS/voice",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPZywq4oF4DpY-a30l-4-1lMCuumiQ3cslFCMSyX0FRCXie3XeJ2SVFen7K23LudQSHz533ZV7qqyjiV5rGzd7rbkZpsNTdFozDhM2zdLopWFEekRMbFGyMcU"
      },
      { 
        name: "WiFi Relay Board", 
        price: 899, 
        description: "ESP-based IoT relay controller board",
        image: "https://m.media-amazon.com/images/I/61XUCnnM+SL._SL1500_.jpg"
      }
    ],
    "Power Supplies": [
      { 
        name: "LM2596 DC-DC Buck Converter", 
        price: 299, 
        description: "Step-down power module with voltage adjustment",
        image: "https://robu.in/wp-content/uploads/2016/03/1-60.jpg"
      },
      { 
        name: "12V 2A Power Adapter", 
        price: 499, 
        description: "Reliable power supply for embedded systems and devices",
        image: "https://m.media-amazon.com/images/I/71ly9w-7UKL._SL1500_.jpg"
      },
      { 
        name: "9V Battery with Clip", 
        price: 89, 
        description: "Standard 9V battery with snap connector",
        image: "https://m.media-amazon.com/images/I/61g52cx9AbL._SL1337_.jpg"
      },
      { 
        name: "USB Boost Converter 5V to 9V", 
        price: 229, 
        description: "Converts 5V input to 9V output",
        image: "https://m.media-amazon.com/images/I/51pIvTzNU8L._SL1000_.jpg"
      },
      { 
        name: "18650 Battery Holder", 
        price: 149, 
        description: "Battery holder for rechargeable Li-Ion batteries",
        image: "https://ebhoot.in/wp-content/uploads/2023/09/18650-battery-holder-for-lithium-ion-4-cell.jpg"
      },
      { 
        name: "5V 1A Power Supply Module", 
        price: 199, 
        description: "Micro USB-based power supply board",
        image: "https://robu.in/wp-content/uploads/2023/11/5V1A-Voltage-Stabilized-Power-Supply-Module-DC5-3.png"
      }
    ],
    "Electronic Components": [
      { 
        name: "Solderless Breadboard", 
        price: 299, 
        description: "830-point prototyping breadboard for circuit testing",
        image: "https://us.zohocommercecdn.com/product-images/solder+less+breadboard+400+points-min.PNG/2208614000036099383/600x600?storefront_domain=www.campuscomponent.com"
      },
      { 
        name: "Jumper Wires M-F", 
        price: 149, 
        description: "40-piece wire set for connecting electronic modules",
        image: "https://majestronicz.in/cdn/shop/files/BA-144.webp?v=1721378947"
      },
      { 
        name: "10k Ohm Resistors Pack", 
        price: 79, 
        description: "Pack of 100 standard resistors",
        image: "https://i0.wp.com/www.rytronics.in/wp-content/uploads/2021/12/10k-ohm-Resistor.jpg?fit=1280%2C1044&ssl=1"
      },
      { 
        name: "100nF Capacitors Pack", 
        price: 99, 
        description: "Electrolytic capacitors for filters and timing",
        image: "https://m.media-amazon.com/images/I/51k9A+JE1LL._SL1426_.jpg"
      },
      { 
        name: "1N4007 Diode Pack", 
        price: 89, 
        description: "Standard rectifier diodes for protection",
        image: "https://m.media-amazon.com/images/I/713SsB76vNL._SL1500_.jpg"
      },
      { 
        name: "BC547 Transistors", 
        price: 119, 
        description: "General-purpose NPN transistor pack",
        image: "https://roboman.in/wp-content/uploads/2024/08/BC547-1.jpg"
      }
    ],
    "Robotics Kits": [
      { 
        name: "4WD Chassis Kit", 
        price: 1299, 
        description: "Basic robotic car kit with motors and wheels",
        image: "https://m.media-amazon.com/images/I/61MpJD378VL._SL1000_.jpg"
      },
      { 
        name: "Line Follower Robot Kit", 
        price: 1699, 
        description: "Beginner-friendly kit for line-tracking robots",
        image: "https://www.robojunkies.com/cdn/shop/files/LF2Isometric3.jpg?v=1684679076"
      },
      { 
        name: "Obstacle Avoidance Robot Kit", 
        price: 1899, 
        description: "Includes ultrasonic sensor and chassis",
        image: "https://m.media-amazon.com/images/I/71cBMzaJ-5L._SL1292_.jpg"
      },
      { 
        name: "Bluetooth Controlled Robot Kit", 
        price: 2199, 
        description: "Control your bot wirelessly using mobile",
        image: "https://robu.in/wp-content/uploads/2019/10/SKU-558445.png"
      },
      { 
        name: "Arduino Robot Kit", 
        price: 2799, 
        description: "Everything you need for a programmable robot",
        image: "https://m.media-amazon.com/images/I/91ZOWYZe61S._SL1500_.jpg"
      },
      { 
        name: "Voice Controlled Robot Kit", 
        price: 3299, 
        description: "Responds to voice commands using Android",
        image: "https://m.media-amazon.com/images/I/81rSwOZ8j5L._SL1500_.jpg"
      }
    ],
    "Tools & Equipment": [
      { 
        name: "Soldering Iron 60W", 
        price: 699, 
        description: "Standard electric soldering iron for PCB work",
        image: "https://www.noelindia.com/cdn/shop/products/SolderingIron60watt.jpg?v=1623139290"
      },
      { 
        name: "Digital Multimeter DT830D", 
        price: 799, 
        description: "Basic multimeter for electronics measurement",
        image: "https://m.media-amazon.com/images/I/71CduFGaAcL._SL1500_.jpg"
      },
      { 
        name: "Helping Hands Magnifier", 
        price: 449, 
        description: "Assists with soldering small components",
        image: "https://m.media-amazon.com/images/I/61W+Ar0Fe6L._SL1000_.jpg"
      },
      { 
        name: "Desoldering Pump", 
        price: 229, 
        description: "Essential for removing solder from PCBs",
        image: "https://m.media-amazon.com/images/I/31f1XypmngL._SX300_SY300_QL70_FMwebp_.jpg"
      },
      { 
        name: "Wire Stripper Cutter", 
        price: 299, 
        description: "Strips insulation from electronic wires",
        image: "https://m.media-amazon.com/images/I/51UUoDeMe5L._SL1000_.jpg"
      },
      { 
        name: "Hot Glue Gun", 
        price: 499, 
        description: "For quick mounting and repairs",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP4VWIB-4J7453Z9QE0vhU9AGpi1i6a_EkmzGpAQ4zytpzpEmbypL0TezEWHQJ7ZcfTddIolQmBduJpbs5MsIKpr-Dw6rcLPn7G8TprimJ2vBc9TkkOVH9"
      }
    ],
    "Cables & Connectors": [
      { 
        name: "USB to TTL Converter", 
        price: 399, 
        description: "UART serial converter for microcontroller programming",
        image: "https://m.media-amazon.com/images/I/619gfyV8V0L._SL1000_.jpg"
      },
      { 
        name: "Dupont Connectors Kit", 
        price: 499, 
        description: "Assorted pin connectors for breadboard and PCBs",
        image: "https://m.media-amazon.com/images/I/91iDqlYNHyL._SX522_.jpg"
      },
      { 
        name: "JST Connector Kit", 
        price: 299, 
        description: "Popular connectors for Li-Po and electronics",
        image: "https://m.media-amazon.com/images/I/81VinqVgneL._SL1500_.jpg"
      },
      { 
        name: "DC Barrel Jack Adapter", 
        price: 149, 
        description: "Plug for power connections",
        image: "https://m.media-amazon.com/images/I/51nlFPg9QuL._SL1001_.jpg"
      },
      { 
        name: "Micro USB Cable", 
        price: 199, 
        description: "Power/data cable for small devices",
        image: "https://m.media-amazon.com/images/I/61kONYDgWpL._SL1500_.jpg"
      },
      { 
        name: "Male-Female Jumper Wires", 
        price: 129, 
        description: "30-piece wire pack for quick prototyping",
        image: "https://cdn11.bigcommerce.com/s-3fd3md1ghs/images/stencil/1280x1280/products/25012/10437/1-Pin-Jumper-Wire-Male-Female---Pack-of-10__31186.1571492168.jpg?c=2"
      }
    ],
    "Development Boards": [
      { 
        name: "NodeMCU ESP8266", 
        price: 549, 
        description: "WiFi development board for IoT prototyping",
        image: "https://m.media-amazon.com/images/I/61UOyRccN0L._SL1000_.jpg"
      },
      { 
        name: "STM32 Blue Pill", 
        price: 799, 
        description: "Affordable 32-bit development board",
        image: "https://stm32-base.org/assets/img/boards/STM32F103C8T6_Blue_Pill-1.jpg"
      },
      { 
        name: "ESP32 Dev Board", 
        price: 899, 
        description: "Dual-core WiFi and BLE development board",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQKpLXQS6qKVYMCCNCgU5PiWP3W_lyBHPhYD8huzKvK72S2tVD3X74lYByMd2_TizXN1ssWOSwxNOZa6EVXU1TfNlsZQ4Fu33SO3n1f8-yrOWbbIWp7givu"
      },
      { 
        name: "Teensy 4.0", 
        price: 1899, 
        description: "High-performance 32-bit ARM microcontroller board",
        image: "https://www.theengineerstore.in/cdn/shop/products/Capture_7e10ad03-a9ee-4805-a234-425941be9651.png?v=1701077979"
      },
      { 
        name: "ATmega328P Development Board", 
        price: 599, 
        description: "Compact board based on Arduino core",
        image: "https://robu.in/wp-content/uploads/2017/10/PIC_1263.jpg"
      },
      { 
        name: "LGT8F328P Board", 
        price: 449, 
        description: "Low-cost alternative to ATmega328P",
        image: "https://robu.in/wp-content/uploads/2024/09/60-1.jpg"
      }
    ],
    "3D Printing": [
      { 
        name: "PLA Filament 1.75mm - 1kg", 
        price: 1499, 
        description: "Premium 3D printer filament for reliable printing",
        image: "https://3dzone.in/wp-content/uploads/2022/05/blue-20967653244985.png"
      },
      { 
        name: "3D Printer Nozzle Set", 
        price: 449, 
        description: "Multi-size nozzle set for most FDM printers",
        image: "https://m.media-amazon.com/images/I/815kKxZhjQL._SL1500_.jpg"
      },
      { 
        name: "Ender-3 Build Plate", 
        price: 899, 
        description: "Heated bed surface for Creality 3D printers",
        image: "https://m.media-amazon.com/images/I/81JVtMrBK2L._SL1500_.jpg"
      },
      { 
        name: "3D Printer Timing Belt", 
        price: 299, 
        description: "GT2 rubber belt for axis control",
        image: "https://m.media-amazon.com/images/I/51Oo3DhjBXL._SL1000_.jpg"
      },
      { 
        name: "3D Printer Stepper Driver", 
        price: 599, 
        description: "A4988 driver for controlling stepper motors",
        image: "https://m.media-amazon.com/images/I/61UnkCqbwXL._SL1001_.jpg"
      },
      { 
        name: "3D Printing Cleaning Kit", 
        price: 449, 
        description: "Tools for maintenance of nozzles and beds",
        image: "https://m.media-amazon.com/images/I/91ZxHEkRQlL._SL1500_.jpg"
      }
    ],
    "LED & Lighting": [
      { 
        name: "5mm LED Pack (100pcs)", 
        price: 199, 
        description: "Mixed color LED set for DIY lighting projects",
        image: "https://m.media-amazon.com/images/I/51I44KmrB6L._SL1000_.jpg"
      },
      { 
        name: "WS2812B RGB LED Strip", 
        price: 1199, 
        description: "Individually addressable LED strip for advanced visuals",
        image: "https://m.media-amazon.com/images/I/61a9DM9iFFL._SL1335_.jpg"
      },
      { 
        name: "High Power White LED", 
        price: 79, 
        description: "1W LED for spotlight applications",
        image: "https://m.media-amazon.com/images/I/41w6cU4AYvL.jpg"
      },
      { 
        name: "RGB LED Module", 
        price: 229, 
        description: "Three-color LED module for projects",
        image: "https://robu.in/wp-content/uploads/2017/09/201608261700127175341.jpg"
      },
      { 
        name: "Dot Matrix LED Display", 
        price: 399, 
        description: "8x8 matrix for scrolling messages",
        image: "https://robu.in/wp-content/uploads/2019/12/8x8-Red-64-LED-Dot-Matrix-Display-4.jpg"
      },
      { 
        name: "LED Bar Graph Module", 
        price: 299, 
        description: "10-segment LED bar for battery/volume indicators",
        image: "https://m.media-amazon.com/images/I/41y8Vi3bHoL._SY445_SX342_QL70_FMwebp_.jpg"
      }
    ],
    "Audio & Sound": [
      { 
        name: "LM386 Audio Amplifier Module", 
        price: 199, 
        description: "Audio amplifier board for speaker systems",
        image: "https://adiy.in/wp-content/uploads/2023/07/LM386-Module-3.jpg"
      },
      { 
        name: "8 Ohm 0.5W Speaker", 
        price: 79, 
        description: "Compact speaker for sound output in embedded devices",
        image: "https://m.media-amazon.com/images/I/41-z2t0kcIL.jpg"
      },
      { 
        name: "Microphone Sound Sensor", 
        price: 299, 
        description: "Detects sound intensity levels",
        image: "https://robu.in/wp-content/uploads/2019/03/Analog-Sound-Sensor-Microphone-Module-for-Arduino-ROBU.IN_-1.jpg"
      },
      { 
        name: "Active Buzzer Module", 
        price: 149, 
        description: "Sound producing module for alerts",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRd9OKmdXFd7Ctx7awJhNxkvgjjeKJip-fmqv7_aDoLBeKQTPfYY5JPuGpiIWqkg-0mhXVHBafGjQPrC0r3MSMaAi4_bT6i_S5xtMs6FyC6lbxEdtTgfiPq"
      },
      { 
        name: "DFPlayer Mini MP3 Module", 
        price: 399, 
        description: "MP3 player module with microSD card support",
        image: "https://m.media-amazon.com/images/I/61JaSISJ1AL._SL1001_.jpg"
      },
      { 
        name: "Stereo Amplifier Board", 
        price: 549, 
        description: "Class D stereo amp for small speakers",
        image: "https://m.media-amazon.com/images/I/71y0ghThV9L._SL1000_.jpg"
      }
    ],
    "Wearable Tech": [
      { 
        name: "LilyPad Arduino", 
        price: 799, 
        description: "Sewable microcontroller board for wearable electronics",
        image: "https://docs.arduino.cc/static/1a057094ced72ec250b014e92a58af22/a207c/lilypad_main.jpg"
      },
      { 
        name: "Flexible OLED Display", 
        price: 1399, 
        description: "Bendable display ideal for wearable and curved surfaces",
        image: "https://www.oled-info.com/sites/default/files/page/pageLG-Display-5-inch-flexible-OLED-prototype-sid-2013-img_assist-289x195.jpg"
      },
      { 
        name: "Vibration Motor Module", 
        price: 299, 
        description: "Small vibrating motor for haptic feedback",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSP6rUviH2BhlrKUV5NdV5ZmRALG6baiZUGJFv6wz00ORkL-Z1vCkGt9AgbefqvmfD1mZkVLOsf62yvvO3tVO7f0bMB_pE_MItc0kfg-VSna-sGfPYE_R_Vmj3v"
      },
      { 
        name: "Conductive Thread", 
        price: 449, 
        description: "Special thread used to sew circuits",
        image: "https://i0.wp.com/protocentral.com/wp-content/uploads/2020/10/2493-1.jpg?fit=600%2C600&ssl=1"
      },
      { 
        name: "NeoPixel Ring", 
        price: 799, 
        description: "Circular RGB LED module for wearables",
        image: "https://m.media-amazon.com/images/I/61QhNYIexqL._SL1200_.jpg"
      },
      { 
        name: "Wearable Heart Rate Sensor", 
        price: 999, 
        description: "Pulse sensor for wearable health tracking",
        image: "https://my.clevelandclinic.org/-/scassets/Images/org/health/articles/23429-heart-rate-monitor"
      }
    ]
  };

  const products: Product[] = [...featuredProducts];
  let productId = featuredProducts.length + 1;

  categories.forEach(category => {
    const templates = productTemplates[category.name as keyof typeof productTemplates];
    if (templates) {
      templates.forEach((template) => {
        products.push({
          id: productId++,
          name: template.name,
          category: category.name,
          price: template.price,
          description: template.description,
          image: template.image,
          rating: parseFloat((4.0 + Math.random() * 1.0).toFixed(1)),
          stock: Math.floor(Math.random() * 200) + 50,
          reviews: Math.floor(Math.random() * 100) + 10
        });
      });
    }
  });

  return { products, categories };
}

function getImageForCategory(categoryName: string): string {
  const imageMap: Record<string, string> = {
    'Arduino Boards': 'https://cdn3.f-cdn.com/files/download/197931628/arduino.jpg',
    'Raspberry Pi': 'https://robu.in/wp-content/uploads/2020/09/Raspberry-Pi-4-Model-B-4GB.jpg',
    'Sensors': 'https://robu.in/wp-content/uploads/2021/10/DHT22.png',
    'Motors & Actuators': 'https://robu.in/wp-content/uploads/2019/07/28BYJ-48-Stepper-Motor-and-ULN2003-Stepper-Motor-Driver-Board-1-600x600.jpg',
    'Displays': 'https://robu.in/wp-content/uploads/2021/07/OLED.jpg',
    'IoT & Wireless': 'https://robu.in/wp-content/uploads/2021/11/ESP8266-ESP-01-WiFi-Module-600x600.jpg',
    'Power Supplies': 'https://robu.in/wp-content/uploads/2018/06/LM2596-DC-DC-Step-Down-Adjustable-Power-Supply-Module-2-600x600.jpg',
    'Electronic Components': 'https://robu.in/wp-content/uploads/2020/03/830-Points-Solderless-Breadboard.jpg',
    'Robotics Kits': 'https://robu.in/wp-content/uploads/2020/07/4WD-Robot-Car-Chassis-Kit.jpg',
    'Tools & Equipment': 'https://robu.in/wp-content/uploads/2018/07/Soldering-Iron.jpg',
    'Cables & Connectors': 'https://robu.in/wp-content/uploads/2018/01/USB-TTL-Converter.jpg',
    'Development Boards': 'https://robu.in/wp-content/uploads/2019/05/NodeMCU.jpg',
    '3D Printing': 'https://robu.in/wp-content/uploads/2020/03/PLA-Filament.jpg',
    'LED & Lighting': 'https://robu.in/wp-content/uploads/2018/08/LED-Pack.jpg',
    'Audio & Sound': 'https://robu.in/wp-content/uploads/2019/10/LM386-Audio-Amplifier.jpg',
    'Wearable Tech': 'https://robu.in/wp-content/uploads/2019/06/Lilypad.jpg'
  };
  return imageMap[categoryName] || 'https://cdn3.f-cdn.com/files/download/197931628/arduino.jpg';
}