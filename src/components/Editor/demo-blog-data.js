export const demoBlogHtml = `
<h1><strong>Embedded System Project 5: ESP32 External Display and PWM</strong></h1><p><br></p><p>Hi, I’m Michelle and today I’ll be continuing my blog series of the embedded systems project! ✨🤩 (You can read the previous blog&nbsp;<a href="https://medium.com/@18221052/embedded-system-project-4-esp32-external-sensors-5e880d54f9ce" rel="noopener noreferrer" target="_blank" style="color: inherit;">here</a>&nbsp;🤗)</p><p>The fifth project I’ll be doing is about external display on ESP32. There are various kinds of external displays, such as LED (Light Emitting Diode), 7 Segment LED, LCD (Liquid-Crystal Display), OLED (Organic LED), TFT (Thin-Film Transistor). But on this blog, I’ll be experimenting with the LCD or Liquid-Crystal Display. 😄</p><p>LCD (Liquid-Crystal Display) is a type of flat panel display which uses liquid crystals in its primary form of operation. LCDs have a large and varying set of use cases for consumers and businesses, as they can be commonly found in smartphones, televisions, computer monitors, and instrument panels. LCD is used in embedded system as a simple display that is connected directly to the board to print sensor data, simple count down, displaying scrolling text and more.</p><p>The LCD I’ll be using on this project is a&nbsp;<strong>16x2 I2C LCD</strong>, which I got from the marketplace. The advantage of using an I2C LCD is that the wiring is really simple as we only need to wire the SDA and SCL pins. Additionally, it comes with a built-in potentiometer for us to adjust the contrast between the background and characters on the LCD.</p><p><img src="https://miro.medium.com/v2/resize:fit:1600/1*biM8k5kagF-ufSWAPUcB5w.jpeg"></p><p><img src="https://miro.medium.com/v2/resize:fit:1600/1*yrzm5EJ_4i49imfP9R8hXg.jpeg"></p><p>I2C LCD Display</p><p>In this project, we will be needing these components listed below</p><ol><li>ESP32 Development Board</li><li>Micro-USB Cable</li><li>Breadboard</li><li>16x2 I2C Liquid Crystal Display (LCD)</li><li>Male-to-Female jumper wires</li><li>Laptop/PC with Arduino IDE installed and set</li></ol><h2>Pre-Project: Installing the LiquidCrystal_I2C Library</h2><p>To use the I2C LCD, we will need to install the LiquidCrystal_I2C Library first. Follow these steps below to install it:</p><p><br></p><ol><li><a href="https://github.com/marcoschwartz/LiquidCrystal_I2C/archive/master.zip" rel="noopener noreferrer" target="_blank" style="color: inherit;">Click here to download the LiquidCrystal_I2C Library</a>&nbsp;and you should have a .zip folder in your Downloads</li><li>Unzip the folder and rename the folder to&nbsp;<strong>LiquidCrystal_I2C</strong></li><li>Move the renamed folder to your Arduino IDE installation&nbsp;<strong>libraries&nbsp;</strong>folder</li><li>Finally, re-open your Arduino IDE</li></ol><p>And you should now have the library installed in your Arduino IDE ready to be used 😉</p><h2>Project: Wiring the LCD to the ESP32</h2><p>As explained earlier, we’ll be wiring the default I2C pins on the LCD to connect to the ESP32, as shown in the schematics diagram below.</p><p><br></p><p><img src="https://miro.medium.com/v2/resize:fit:700/1*KG4-RLcpyVJtUCjhKw4bWA.png"></p><p>schematic diagram of ESP32 with I2C LCD from&nbsp;<a href="https://randomnerdtutorials.com/esp32-esp8266-i2c-lcd-arduino-ide/" rel="noopener noreferrer" target="_blank" style="color: inherit;">randomnerdtutorials.com</a></p><p>The pinout is shown on the diagram below.</p><p><img src="https://miro.medium.com/v2/resize:fit:700/1*AnZpqWqBAEinmVTPHju9Ig.png"></p><p>Pinout of I2C LCD to ESP32</p><p><img src="https://miro.medium.com/v2/resize:fit:1200/1*878Oadv-X6RgURapZXISIA.jpeg"></p><p><img src="https://miro.medium.com/v2/resize:fit:1600/1*9J8RA5c6tWI6ChE3VTJTGA.jpeg"></p><p><img src="https://miro.medium.com/v2/resize:fit:1600/1*71He1LlRLK6xiUq2kSfxzw.jpeg"></p><p>My schematics for reference</p><p>The black wire connects the GND pin in I2C LCD to GND pin in ESP32; The red wire connects the VCC pin in I2C LCD to VIN pin in ESP32; The green wire connects the SDA pin in I2C LCD to GPIO21 in ESP32; The blue wire connects the SCL pin in I2C LCD to GPIO22 in ESP32.</p><h2>Project: Getting the LCD Address</h2><p>1. Copy the code block below, compile, and upload it on your Arduino IDE to get the I2C address.</p><p><br></p><pre class="ql-syntax" spellcheck="false">/*********
  Rui Santos
  Complete project details at https://randomnerdtutorials.com  
*********/

#include &lt;Wire.h&gt;
 
void setup() {
  Wire.begin();
  Serial.begin(115200);
  Serial.println("\nI2C Scanner");
}
 
void loop() {
  byte error, address;
  int nDevices;
  Serial.println("Scanning...");
  nDevices = 0;
  for(address = 1; address &lt; 127; address++ ) {
    Wire.beginTransmission(address);
    error = Wire.endTransmission();
    if (error == 0) {
      Serial.print("I2C device found at address 0x");
      if (address&lt;16) {
        Serial.print("0");
      }
      Serial.println(address,HEX);
      nDevices++;
    }
    else if (error==4) {
      Serial.print("Unknow error at address 0x");
      if (address&lt;16) {
        Serial.print("0");
      }
      Serial.println(address,HEX);
    }    
  }
  if (nDevices == 0) {
    Serial.println("No I2C devices found\n");
  }
  else {
    Serial.println("done\n");
  }
  delay(5000);          
}
</pre><p>2. After uploading the code, open the serial monitor at baud rate of 115200. Press the ESP32 EN button and the I2C address should be displayed in the serial monitor.</p><p><img src="https://miro.medium.com/v2/resize:fit:700/1*fEe6WEyWtgub3NBG-dDH0A.png"></p><p>I2C address found printed in serial monitor</p><p>In my case, the address is 0x27. This address will probably be the same for you if you’re using a similar 16x2.</p><h2>Project: Display Static Text on the LCD</h2><p>You just need to simply copy the code below, that will display a static text on the first and second row on the LCD, compile and upload it.</p><p><br></p><pre class="ql-syntax" spellcheck="false">/*********
  Rui Santos
  Complete project details at https://randomnerdtutorials.com  
*********/

#include &lt;LiquidCrystal_I2C.h&gt;

// set the LCD number of columns and rows
int lcdColumns = 16;
int lcdRows = 2;

// set LCD address, number of columns and rows
// if you don't know your display address, run an I2C scanner sketch
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);  

void setup(){
  // initialize LCD
  lcd.init();
  // turn on LCD backlight                      
  lcd.backlight();
}

void loop(){
  // set cursor to first column, first row
  lcd.setCursor(0, 0);
  // print message
  lcd.print("Hello, World!");
  delay(1000);
  // clears the display to print new message
  lcd.clear();
  // set cursor to first column, second row
  lcd.setCursor(0,1);
  lcd.print("Hello, World!");
  delay(1000);
  lcd.clear(); 
}
</pre><p>The code explanation is given on the<em>&nbsp;//comment</em>&nbsp;on the code block above.</p><p>After uploading, you will get the value displayed on the LCD like shown in the gif attached below.</p><p><img src="https://miro.medium.com/v2/resize:fit:640/1*KuvFCXE0APvDN3haV-3o1w.gif"></p><p>Static Text Display on LCD</p><p>As commented on the code block, I tried to change the printed value into the LCD by changing the&nbsp;<em>lcd.print()</em>&nbsp;code, and here’s the result.</p><p><img src="https://miro.medium.com/v2/resize:fit:700/1*gJlxZH9VR3UCg6Z7khLzGA.gif"></p><p>Static Text Display on LCD; change printed value</p><h2>Project: Display Scrolling Text on the LCD</h2><p>You just need to simply copy the code below, that will display a scrolling text containing more than 16 characters on the second row and a static text on the first row of the LCD, compile and upload it.</p><p><br></p><pre class="ql-syntax" spellcheck="false">#include &lt;LiquidCrystal_I2C.h&gt;

// set the LCD number of columns and rows
int lcdColumns = 16;
int lcdRows = 2;

// set LCD address, number of columns and rows
// if you don't know your display address, run an I2C scanner sketch
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);  

String messageStatic = "Michelle Lim";
String messageToScroll = "Embedded System Project 5: External Display with I2C LCD";

// Function to scroll text
// The function acepts the following arguments:
// row: row number where the text will be displayed
// message: message to scroll
// delayTime: delay between each character shifting
// lcdColumns: number of columns of your LCD
void scrollText(int row, String message, int delayTime, int lcdColumns) {
  for (int i=0; i &lt; lcdColumns; i++) {
    message = " " + message;  
  } 
  message = message + " "; 
  for (int pos = 0; pos &lt; message.length(); pos++) {
    lcd.setCursor(0, row);
    lcd.print(message.substring(pos, pos + lcdColumns));
    delay(delayTime);
  }
}

void setup(){
  // initialize LCD
  lcd.init();
  // turn on LCD backlight                      
  lcd.backlight();
}

void loop(){
  // set cursor to first column, first row
  lcd.setCursor(0, 0);
  // print static message
  lcd.print(messageStatic);
  // print scrolling message
  scrollText(1, messageToScroll, 250, lcdColumns);
}
</pre><p>Code explanation: the&nbsp;<em>scrollText(1, messageToScroll , 250, lcdColumns)&nbsp;</em>function is newly created on this code block. The function allows the&nbsp;<em>messageToScroll&nbsp;</em>variable to be displayed in the second row (1 corresponds to the second row), with a delay time of 250 ms. Aside from the scrollText function, the code is explained on the&nbsp;<em>//comment</em>&nbsp;on the code block above.</p><p>After uploading, you will get the value displayed on the LCD like shown in the gif attached below.</p><p><img src="https://miro.medium.com/v2/resize:fit:700/1*waW0-zlloGkP6JRzBsug3g.gif"></p><p>Scrolling Text Display on LCD; video speed: 2x</p><h2>Project: Display Custom Characters on the LCD</h2><p>You just need to simply copy the code below, that will display custom character of heart as many as the number of columns on the first row of the LCD display which is 16 and print an “I LOVE U” on the second row, compile and upload it.</p><p><br></p><pre class="ql-syntax" spellcheck="false">#include &lt;LiquidCrystal_I2C.h&gt;

// set the LCD number of columns and rows
int lcdColumns = 16;
int lcdRows = 2;

// set LCD address, number of columns and rows
// if you don't know your display address, run an I2C scanner sketch
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);  

//generate byte variable for heart
byte heart[8] = {
  0b00000,
  0b01010,
  0b11111,
  0b11111,
  0b11111,
  0b01110,
  0b00100,
  0b00000
};

void setup(){
  // initialize LCD
  lcd.init();
  // turn on LCD backlight                      
  lcd.backlight();
  // create custom character heart
  lcd.createChar(0, heart);
}

void loop(){
  // set cursor to fourth column, second row; print
  lcd.setCursor(3,1);
  lcd.print("I LOVE YOU");
  
  // set cursor to first column, first row
  for (int i = 0; i &lt; lcdColumns; i++){
    lcd.setCursor(i, 0);
    //display the character
    lcd.write(0);
  }
}
</pre><p>The code is explained in the&nbsp;<em>//comment&nbsp;</em>in the code block above. As for the custom character, you can actually generate other characters aside from heart through this&nbsp;<a href="https://omerk.github.io/lcdchargen/" rel="noopener noreferrer" target="_blank" style="color: inherit;">link</a>. 🧡</p><p>After uploading, you will get the custom character displayed on the LCD like shown in the gif attached below.</p><p><img src="https://miro.medium.com/v2/resize:fit:700/1*Sgw6JDKJA0u-yPklbqdsbQ.gif"></p><p>Custom Character Display on I2C LCD</p><p>Note: A block in a 16x2 LCD with a total of 32 blocks is only able to display a character with 5x8 pixels at most. Hence, you won’t be able to create a customized character/picture with too many details on it as it may require more pixels than the maximum pixel a character can display. If you were to create a detailed picture/character, it is advised to use an OLED display.</p><h2>Bonus Project: Experiment with ESP32 Pulse Width Modulator</h2><p>Pulse Width Modulator (PWM) is a technique to obtain an analog signal from a certain digital system. This technique is usable to control the ‘brightness’ of an LED, speed of a DC motor, and servo motor.</p><p><br></p><p>The GPIOs in ESP32 outputs a 3.3V (HIGH) or 0V (LOW) to create a square signal wave, with a constant amplitude and frequency. To dim an LED, the digital pin is unable to release voltage between 0 and 3.3V. However, the ‘brightness’ of an LED is controlled by the time when the ON and OFF signal is generated.</p><p>There are several terminologies on PWM:</p><ul><li>T_ON (ON Time), is the time when the signal is HIGH.</li><li>T_OFF (OFF Time), is the time when the signal is LOW.</li><li>Period, is the sum of ON time and OFF time.</li><li>Duty Cycle, is the percentage of time when the signal was high during the time of period.</li></ul><p>At 50% duty cycle and 1Hz frequency, the LED will be HIGH for half a second and LOW for the other half second. If the frequency is increased to 50Hz (50 times ON and OFF per second), the LED will be seen glowing at half brightness by the human eye. 🔅👁️</p><p>There are various I/O interfaces of the ESP32 board, one of them are the 16 independent channels PWM controller output. the ESP32 PWM has 3 properties that needs to be configured on the code, which are the Channel (total of 16 channels, from 0 to 15), Frequency (maximum of 78125Hz), and Duty Cycle Resolution (maximum of 13 bits). The PWM signals can be set in any GPIO pin of the ESP32 that can act as an output.</p><p><img src="https://miro.medium.com/v2/resize:fit:700/1*kYBihb1tSC4CRoixGgrGSA.png"></p><p>FYI: 8-bit resolution means that the duty cycle has a resolution value of 0–255. Resolution value of 0 means that the duty cycle is 0%, while resolution value of 255 means that the duty cycle is 100%. To obtain 50% duty cycle, the resolution is 50% of 255 which is 127.</p><h2>Bonus Project: A Step by Step Guide to Experiment with ESP32 PWM</h2><p>For this bonus project, I will be building a simple circuit that dims the LEDs using LED PWM controller of the ESP32.</p><p><br></p><p>Here’s the&nbsp;<strong>steps</strong>&nbsp;you’ll have to follow to dim an LED with PWM using the Arduino IDE:</p><ol><li>First, you need to choose a PWM channel. There are 16 channels from 0 to 15.</li><li>Second, set the PWM signal frequency. For an LED, a frequency of 5000 Hz is fine to use.</li><li>Set the signal duty’s resolution (1 to 16 bits). We’ll use 8-bit resolution to control the LED brightness using a value from 0 to 255.</li><li>Specify which GPIO(s) the signal will appear on. We will be using the&nbsp;<em>ledcAttachPin(GPIO, channel)</em>&nbsp;function that accepts two arguments; the GPIO that will output the signal, and channel that will generate the signal.</li><li>Use the&nbsp;<em>ledcWrite(channel, dutycycle)</em>&nbsp;function to control the LED brigtness using PWM. The function accepts two arguments; the channel that generates the PWM signal, and the duty cycle.</li></ol><p>I will be building a circuit where 3 LEDs will receive the same signal despite being connected to different GPIOs. The components needed are three LEDs, three 330 Ohm resistors, an ESP32 development board, a Micro-USB cable, a breadboard, and jumper wires.</p><p><strong>Bonus Project: Schematics</strong></p><p>The schematics is shown in the picture below.</p><p><img src="https://miro.medium.com/v2/resize:fit:700/1*aDKR3if3F6ZLJeDHT3jz2w.png"></p><p>Schematics for ESP32 PWM</p><p><img src="https://miro.medium.com/v2/resize:fit:1024/1*CKVefTXJCS_P9DGR5iIoZA.jpeg"></p><p><img src="https://miro.medium.com/v2/resize:fit:1024/1*ilSnsetwwMpK_pjVFd288w.jpeg"></p><p><img src="https://miro.medium.com/v2/resize:fit:1024/1*3JX0ySL94kR-K5vPJYxhFA.jpeg"></p><p>my schematics on breadboard</p><p><strong>Bonus Project: Code</strong></p><p>Copy the code attached below, compile and run it on the Arduino IDE.</p><pre class="ql-syntax" spellcheck="false">// the number of the LED pin
const int ledPin = 22;  // 22 corresponds to GPIO22
const int ledPin2 = 21; // 21 corresponds to GPIO21
const int ledPin3 = 5;  // 5 corresponds to GPIO5

// setting PWM properties
const int freq = 5000;
const int ledChannel = 0;
const int resolution = 8;
 
void setup(){
  // configure LED PWM functionalitites
  ledcSetup(ledChannel, freq, resolution);
  
  // attach the channel to the GPIO to be controlled
  ledcAttachPin(ledPin, ledChannel);
  ledcAttachPin(ledPin2, ledChannel);
  ledcAttachPin(ledPin3, ledChannel);
}
 
void loop(){
  // increase the LED brightness
  for(int dutyCycle = 0; dutyCycle &lt;= 255; dutyCycle++){   
    // changing the LED brightness with PWM
    ledcWrite(ledChannel, dutyCycle);
    delay(15);
  }

  // decrease the LED brightness
  for(int dutyCycle = 255; dutyCycle &gt;= 0; dutyCycle--){
    // changing the LED brightness with PWM
    ledcWrite(ledChannel, dutyCycle);   
    delay(15);
  }
}
</pre><p>The three ledPins are all getting the same signal, that is being generated on channel 0. This allows us to see three LEDs increasing and decreasing the brightness simultaneously, resulting in a synchronized effect. The code is explained on the&nbsp;<em>//comment</em>&nbsp;on the code block above.</p><p><strong>Bonus Project: Result</strong></p><p>After uploading, you should see the LEDs dimming and glowing simultaneously as shown on the gif below.</p><p><img src="https://miro.medium.com/v2/resize:fit:480/1*uQA7NnKkqVFwdjPsFPT8SA.gif"></p><p>LEDs increasing and decreasing the brightness simultaneously</p><p>So yea, that’s the end of our fifth Embedded System Project: ESP32 External Display and PWM. (yeah!! 🥳) Stay tune for the next projects and stay safe and healthy 🥰</p>
`;