Import this repo to IDE as maven project.
There are 2 modules as following:

angularclient:
Angular client, change baseUrl value defined in patient-service.service.ts to try local Spring Boot service.
  * Run "ng serve --open" to call Spring Boot service locally.
  * Run "ng build --base-href=/<project_name>/" to build, result exists in /angularclient/dist/ there is a built one in /data-manipulator/src/main/webapp/ base href as "data-manipulator".

data-manipulator:
Spring Boot web service, also a web app.
  * Import it as maven project to IDE then run as Spring Boot App.
  * Or Run "mvn clean install" to create war or pre-generated /target/data-manipulator.war to deploy to web server like Tomcat.
  * Web page built from Angular is already in /data-manipulator/src/main/webapp/
