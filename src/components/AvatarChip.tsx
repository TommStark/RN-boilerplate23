import * as React from 'react';
import {Image} from 'react-native';
import {Chip} from 'react-native-paper';
interface Props {
  name?: string | undefined;
  imageUrl?: string;
  onPress?: () => void;
  icon?: string;
}

const AvatarChip = ({name, imageUrl, onPress, icon}: Props) => (
  <Chip
    icon={icon && icon}
    avatar={
      imageUrl && (
        <Image
          source={{
            uri: imageUrl,
          }}
        />
      )
    }
    onPress={onPress}>
    {name}
  </Chip>
);

export default AvatarChip;
