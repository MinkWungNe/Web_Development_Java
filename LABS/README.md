# README file
## How to add new lab
- In terminal run:
```bash
mvn archetype:generate \
  -DgroupId=vn.edu.dhv \
  -DartifactId=dhv_web_java<number> \
  -DarchetypeArtifactId=maven-archetype-webapp \
  -Dversion=1.0.0-SNAPSHOT \
  -DinteractiveMode=false
```
remember to change the DartifactId value to create a new lab folder

- Copy `pom.xml` file from the first lab and replace it with the one in the new lab folder.
- In terminal run `cd LABS/dhv_web_java<number>` to point cursor in the right lab folder.
- In terminal run `mvn tomcat7:run` 
- To render Vietnamese `<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>` on the top of the file.
