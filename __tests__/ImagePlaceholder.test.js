import React from 'react';
import ImagePlaceholder from './../ImagePlaceholder';
import renderer from 'react-test-renderer';


describe( 'ImagePlaceholder', () => {
  it( 'renders correctly the component', () => {
    const tree = renderer
      .create( <ImagePlaceholder /> )
      .toJSON();
    expect( tree ).toMatchSnapshot();
  } );
} )
