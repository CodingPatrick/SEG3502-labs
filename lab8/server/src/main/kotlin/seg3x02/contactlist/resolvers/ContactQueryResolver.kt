package seg3x02.contactlist.resolvers

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.stereotype.Component
import seg3x02.contactlist.entity.Contact
import seg3x02.contactlist.repository.ContactRepository

@Component
class ContactQueryResolver (val listRepository: ContactRepository,
private val mongoOperations: MongoOperations
) : GraphQLQueryResolver {
    fun contacts(): List<Contact> {
        val list = listRepository.findAll()
        return list
    }
}