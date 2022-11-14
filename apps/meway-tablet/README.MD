1. To run the this expo project you need to have nodejs version : version:11<= node >=16.
2. run expo start --web to run the project
3. if it shows any module not found error try to run -->    
     watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* && rm -rf node_modules/ && npm cache clean --force && npm install && npm start -- --reset-cache

     this one is the bug in react-native :https://github.com/facebook/react-native/issues/24065

4. 