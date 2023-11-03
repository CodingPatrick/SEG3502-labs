package seg3x02.contactlist.resolvers

import graphql.kickstart.tools.GraphQLMutationResolver
import seg3x02.contactlist.entity.Contact
import seg3x02.contactlist.repository.ContactRepository
import org.springframework.stereotype.Component
import java.util.*

@Component
class ContactMutationResolver (private val contactRepository: ContactRepository): GraphQLMutationResolver {
        fun newContact(prenom: String, nom: String, telephone: String, email: String) : Contact {
            val contact = Contact(prenom, nom, telephone, email)
            contact.contactId = UUID.randomUUID().toString()
            contactRepository.save(contact)
            return contact
        }
}