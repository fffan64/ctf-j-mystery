# Solution

1. Access to `/`
2. Get data from QR Code 
3. It seems to be base64 encoded, decode it as string
4. You see garbage but also some string that seems to be Java code ?
5. Extract the base64 as a binary and rename it whatever.class
6. Use online Java decompiler to see the code
7. It seems the function giving the flag is not called and that you need to pass some parameters to it
8. Modify the code to call the func and pass param array from command line
9. Use online Java compiler to execute the function and pass the numbers given in the `/` page
10. Get the flag on the console

# Explanation/Help

https://zxing.org/w/decode.jspx
https://emn178.github.io/online-tools/base64_decode_file.html
https://jdec.app/
https://www.jdoodle.com/online-java-compiler/