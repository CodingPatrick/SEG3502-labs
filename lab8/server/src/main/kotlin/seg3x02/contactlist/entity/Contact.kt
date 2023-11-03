package seg3x02.contactlist.entity

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "list")
data class Contact(var prenom: String, 
    var nom: String, 
    var telephone: String, 
    var email: String) {
    @Id
    var contactId: String = ""
}
