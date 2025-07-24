import React, { useRef, useState } from 'react'
import { Box, Flex, Icon, Image, Text, VStack } from '@chakra-ui/react'
import { MdAddPhotoAlternate } from 'react-icons/md'
// import AppIcons from '@/core/AppIcons'

interface CoverImageUploaderProps {
  onImageUpload?: (file: File) => void
  label: string
  placeholder?: string
  legend: string
  isErrored?: boolean
  errorMessage?: string
}

const ImageInput: React.FC<CoverImageUploaderProps> = ({
  onImageUpload,
  legend,
  placeholder,
  label,
  isErrored = false,
  errorMessage,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione uma imagem válida.')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)

    if (onImageUpload) {
      onImageUpload(file)
    }
  }

  // const handleBoxClick = () => {
  //   inputRef.current?.click()
  // }

  return (
    <VStack align="flex-start" w="100%">
      <Text fontWeight="bold">{label && label}</Text>
      <Text fontSize="13px" color="#6a6969" fontStyle="italic" mb={1}>
        {legend && legend}
      </Text>

      <Box
        w="100%"
        h="160px"
        border="1px solid"
        borderColor="black"
        borderRadius="md"
        cursor="pointer"
        position="relative"
        onClick={() => inputRef.current?.click()}
        bg="white"
        overflow="hidden"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt="Preview"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        ) : (
          <Flex
            direction="column"
            align="center"
            justify="center"
            h="100%"
            color="gray.500"
          >
            <Icon color="brown.300" fontSize="56px" />
            <Text
              fontSize={'13px'}
              fontStyle="italic"
              fontWeight={'500'}
              color={'#6a6969'}
            >
              Clique para adicionar uma imagem
            </Text>
          </Flex>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {errorMessage && isErrored && (
          <Text fontSize={'sm'} color={'red.500'} mt={2}>
            {errorMessage}
          </Text>
        )}
      </Box>
    </VStack>
  )
}

export default ImageInput