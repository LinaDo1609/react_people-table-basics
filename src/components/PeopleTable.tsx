import React from 'react';
import { PersonLink } from './PersonLink';
import { useParams } from 'react-router-dom';

type Person = {
  name: string;
  sex: string;
  born: number;
  died: number;
  fatherName: string | null;
  motherName: string | null;
  slug: string;
};

type Props = {
  people: Person[] | undefined;
};

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const { slug } = useParams();
  const selectedUser = slug ? slug : 0;

  return (
    <>
      {people?.length === 0 ? (
        <p data-cy="noPeopleMessage">There are no people on the server</p>
      ) : (
        <table
          data-cy="peopleTable"
          className="table is-striped is-hoverable is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Sex</th>
              <th>Born</th>
              <th>Died</th>
              <th>Mother</th>
              <th>Father</th>
            </tr>
          </thead>

          <tbody>
            {people?.map(person => {
              const motherLink = people.find(
                data => data.name === person.motherName,
              )?.slug;

              const fatherLink = people.find(
                data => data.name === person.fatherName,
              )?.slug;

              return (
                <PersonLink
                  key={person.name}
                  person={person}
                  motherLink={motherLink}
                  fatherLink={fatherLink}
                  isSelected={person.slug === selectedUser}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
