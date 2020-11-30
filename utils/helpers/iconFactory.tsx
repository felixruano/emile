import * as Icons from '@components/icons';

const iconFactory = (courseKey = '', boxSize = 8, color = '') => {
  switch (courseKey) {
    case 'ap-biology':
      return <Icons.DnaIcon2 boxSize={boxSize} color={color} />;
    case 'ap-literature':
      return <Icons.LiteratureIcon boxSize={boxSize} color={color} />;
    case 'ap-gov':
      return <Icons.HistoryIcon boxSize={boxSize} color={color} />;
  }
}

export default iconFactory;