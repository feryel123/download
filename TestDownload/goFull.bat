@echo off
cd C:\applications\front_back
timeout /t 30
cd %1
spring init --build maven --name %1 --groupId %2 --artifactId %3  --description %4 --packaging %5 --java-version %6 --dependencies %7  
exit