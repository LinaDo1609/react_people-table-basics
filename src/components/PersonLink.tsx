import { NavLink } from 'react-router-dom';
import React from 'react';

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
  person: Person;
  motherLink: string | undefined;
  fatherLink: string | undefined;
  isSelected: boolean;
};

export const PersonLink: React.FC<Props> = ({
  person,
  motherLink,
  fatherLink,
  isSelected,
}) => {
  return (
    <tr
      data-cy="person"
      key={person.name}
      className={isSelected ? 'has-background-warning' : ''}
    >
      <td>
        <NavLink
          className={person.sex === 'f' ? 'has-text-danger' : ''}
          to={`/people/${person.slug}`}
        >
          {person.name}
        </NavLink>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {motherLink ? (
          <NavLink className="has-text-danger" to={`/people/${motherLink}`}>
            {person.motherName || '-'}
          </NavLink>
        ) : (
          person.motherName || '-'
        )}
      </td>
      <td>
        {fatherLink ? (
          <NavLink to={`/people/${fatherLink}`}>
            {person.fatherName || '-'}
          </NavLink>
        ) : (
          person.fatherName || '-'
        )}
      </td>
    </tr>
  );
};
