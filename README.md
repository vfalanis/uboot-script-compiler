# U-Boot Script Compiler

This is a simple but useful online tool for compiling U-Boot scripts for ARM architecture.

### Usage

1. Copy script to webpage
2. Click Compile button
3. A compiled script will be downloaded to your computer

### Wishlist

Some of the things I would like to implement in the future:
- upload script source from computer
- syntax parsing
- more...

### Build (Linux only)

1. Install u-boot-tools
    ```
    apt-get install u-boot-tools
    ```
    
2. Clone this repo

   ```
    git clone https://github.com/vfalanis/uboot-script-compiler.git
    ```
3. Install required modules

   ```
    npm install
    ```
4. Run the application

   ```
    node index.js
    ```

