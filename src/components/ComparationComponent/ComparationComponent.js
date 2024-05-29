import React from 'react';
import PropTypes from 'prop-types';
import {
  OpfCardCustom,
  OpfGrid,
  OpfGridItem,
  OpfContainer,
  OpfHeadlineValue,
} from '@absis-components/react';

export const ComparationComponent = props => {
  const { selectedClients } = props;
  return (
    <OpfGrid justifyContent="center">
      {selectedClients.map(cli => {
        return (
          <OpfGridItem b100={12 / selectedClients.length} key={cli.id}>
            <OpfCardCustom value={cli}>
              <OpfContainer contentAlign="center">
                <OpfHeadlineValue
                  value={cli.first_name}
                  title1={cli.email}
                  text="Magna deserunt mollit nisi ex officia nulla do enim labore ad sint consequat dolor adipisicing. Mollit officia commodo velit irure do aute dolor elit tempor commodo quis fugiat ullamco. Quis est deserunt deserunt Lorem elit. Ut consequat aliqua ut quis minim mollit non magna veniam est nisi eu ullamco cillum. Do in esse ad esse velit anim nostrud fugiat irure do eu ut laboris excepteur. Eiusmod elit voluptate minim ea labore aliqua."
                />
              </OpfContainer>
            </OpfCardCustom>
          </OpfGridItem>
        );
      })}
    </OpfGrid>
  );
};

ComparationComponent.propTypes = {
  selectedClients: PropTypes.array,
};
