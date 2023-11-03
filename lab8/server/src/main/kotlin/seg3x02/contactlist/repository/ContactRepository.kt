package seg3x02.contactlist.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import seg3x02.contactlist.entity.Contact

@Repository
interface ContactRepository: MongoRepository<Contact, String>
