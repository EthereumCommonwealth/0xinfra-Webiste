import React from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import SectionHeading from './commons/SectionHeading';
import TeamMember from './TeamMember';

const Team = ({ teamMembers }) => (
  <Element name='team' className='Team'>
    <div className='Team-content container'>
      <SectionHeading title='Team' />
      <div className='Team-list'>
        {teamMembers.length > 0 ?
          teamMembers.map(member => (
            <TeamMember
              key={member.name}
              avatar={member.avatar}
              name={member.name}
              position={member.position}
              socialNetworks={member.socialNetworks}
              bio={member.bio}
            />
          )) : null
        }
      </div>
    </div>
  </Element>
);

function mapStateTopProps(state) {
  return {
    teamMembers: state.teamMembers,
  };
}

export default connect(mapStateTopProps)(Team);
