import PIL
import glob
from PIL import Image
import os
from os import walk

path = '../src/assets/'
filenames = next(walk(path), (None, None, []))[2]

new_size = (100, 67)

for i in range(1, len(filenames)):
  img_name = path + filenames[i]
  img = Image.open(img_name).convert('RGB')
  if img.size != new_size:
    img = img.resize(new_size)
    img.save(img_name)
    print('resized image: {0}'.format(img_name))
