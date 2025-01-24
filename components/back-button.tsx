// components/BackButton.tsx
import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link, useNavigation, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const BackButton: FC = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={
        router.canGoBack() ? () => router.back() : () => router.replace('/')
      }
    >
      <Ionicons name="arrow-back" size={24} />
    </TouchableOpacity>
  );
};

export default BackButton;
