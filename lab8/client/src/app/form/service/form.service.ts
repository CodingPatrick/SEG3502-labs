import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { ApolloQueryResult, FetchResult } from "@apollo/client/core";
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 constructor(private apollo: Apollo) {}

  public getContact(): Observable<ApolloQueryResult<any>> {
    return this.apollo
    .query<any>({
      query: gql`
      {
          contacts {
            prenom
            nom
            telephone
            email
          }
      }
      `
    });
  }

  public addContact(c: Contact): Observable<FetchResult<unknown>> {
    return this.apollo.mutate({
        mutation: gql`
          mutation newContact(
            $prenom: String!,
            $nom: String!,
            $telephone: String!,
            $email: String!,
           ){
            newContact(
              prenom: $prenom,
              nom: $nom,
              telephone: $telephone,
              email: $email,
              ){
              contactId
            }
          }
        `,
        variables: {
          prenom: c.prenom,
          nom: c.nom,
          telephone: c.telephone,
          email: c.email,
        }
      }
    );
  }
}