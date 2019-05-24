### Result page for SingularityNET's Annotation Service ###

This application helps track the progress of a particular moses analysis and download the result once it is completed. The particular analysis run is identified by an ID that is passed as part of the URL. 

**Running the application**
1. Clone the project \
``` git clone https://github.com/MOZI-AI/service-result ```

2. Go into the project folder and install dependencies \
``` cd service-result ``` \
``` npm i ``` 
3. Define SERVICE_ADDR enviroment variable. It should point to the server that responds with the status of moses analysis runs.\
```export SERVICE_ADDR=<ADDR>```

4. Run the project \
``` npm start ``` 

5. When the project opens in your browser append the identifier to the URL ( ```?id=<IDENTIFIER>``` ) and navigate to it.  
