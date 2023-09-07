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
    style={{backgroundColor: 'transparent'}}
    textStyle={{color: 'white', fontSize: 16, fontWeight: 'bold'}}
    selectedColor="white"
    icon={icon && icon}
    avatar={
      imageUrl && (
        <Image
          style={{width: 30, height: 30, borderRadius: 15}}
          source={{
            uri: imageUrl,
          }}
        />
      )
    }
    onPress={onPress}>
    {name && `Hola, ${name} >`}
  </Chip>
);

export default AvatarChip;
