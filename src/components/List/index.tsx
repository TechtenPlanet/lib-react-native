import * as React from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import Divider from '../Divider';
import useThemeColors from 'lib_hooks/useThemeColors';
import ListRowItem, { ListRowItemProps } from './ListRowItem';
import styles from './styles';

interface OwnProps {
  data: ListRowItemProps[] | undefined;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

type ListProps = OwnProps & Partial<FlatListProps<any>>;

export const List: React.FC<ListProps> = ({
  data,
  renderItem,
  margin,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  padding,
  paddingTop,
  paddingBottom,
  paddingVertical,
  paddingHorizontal,
  ...rest
}) => {
  const { card } = useThemeColors();
  const listRef = React.useRef(null);
  useScrollToTop(listRef);

  const _renderDefaultItem: ListRenderItem<ListRowItemProps> = ({ item }) => {
    return <ListRowItem {...item} />;
  };

  return (
    <FlatList
      {...rest}
      ref={listRef}
      keyExtractor={(item, index) => `${item.id} - ${index}`}
      data={data}
      contentContainerStyle={[
        {
          backgroundColor: card,
        },
        styles.contentContainer,
        margin && { margin },
        marginBottom && { marginBottom },
        marginTop && { marginTop },
        marginVertical && { marginVertical },
        marginHorizontal && { marginHorizontal },
        padding && { padding },
        paddingBottom && { paddingBottom },
        paddingTop && { paddingTop },
        paddingVertical && { paddingVertical },
        paddingHorizontal && { paddingHorizontal },
      ]}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem || _renderDefaultItem}
    />
  );
};

export default List;
