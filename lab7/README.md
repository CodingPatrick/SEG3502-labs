# SEG3502 Lab 7 - Service Web de Données

### Soumission par:

Nom: Patrick Loranger, plora079@uottawa.ca<br>
Numéro d'étudiant: 300112374<br>

### Professeur et Assistant à l'enseignement

Professor: Stéphane S. Somé, stephane.some@uottawa.ca<br>
TA: Chedli Redissi, crdis068@uottawa.ca<br>

Cours: SEG 3502<br>
Date: Le dimanche, 6 novembre, 2022<br>

### Lien pour la soumission 

* [https://github.com/SEG3502F22/lab7-CodingPatrick](https://github.com/SEG3502F22/lab7-CodingPatrick)

### Comment utiliser le code

1. Open docker
2. Run the following command in a terminal:
```bash
docker run -d -p 6033:3306 --name=docker-mysql --env="MYSQL_ROOT_PASSWORD=root"--env="MYSQL_PASSWORD=root" --env="MYSQL_DATABASE=booksDb" mysql
```
3. Make sure the docker container docker-mysql is running 
4. Open the "server" folder in a new terminal and run it using: 
```bash
./gradlew bootRun
```
5. Open the "client" folder in a new terminal and run it using:
```bash
ng serve
```
6. To see the back-end go to localhost:8080 and to see the front-end go to localhost:4200 <br>
6. Go to the "Login" section and log in using: UserName: admin and Password: password <br>
7. Go to the "Admin" section and add a book with an author<br>
8. Go to the "Authors" section and search up the author using the author id<br>
9. All done, the author information should appear. An author can have multiple books, and there can be multiple authors.

---

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8570833&assignment_repo_type=AssignmentRepo)
