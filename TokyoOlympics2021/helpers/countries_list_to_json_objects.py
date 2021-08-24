import bs4
import urllib.request
from urllib.request import urlopen
from bs4 import BeautifulSoup as soup

filename = 'countries.json'
htmldata = urlopen('https://olympics.com/tokyo-2020/olympic-games/en/results/all-sports/nocs-list.htm')
bsobj = soup(htmldata.read(), 'html.parser')
imgs = bsobj.findAll('img', {'class': 'flagStyleBig'})
country_names = bsobj.findAll('div', {'class': 'mx-auto font-weight-bold'})

with open(filename, 'w') as file:
  file.write('[\n')
  for i in range(0, len(imgs)):
    file.write('  {\n')
    file.write('    "name": "{0}",\n'.format(country_names[i].text))
    file.write('    "flagImgSrc": "../../assets/{0}.png",\n'.format(country_names[i].text))
    file.write('    "numberOfAthletes": 0\n')
    if i + 1 == len(imgs):
      file.write('  }\n')
    else:
      file.write('  },\n')
  file.write(']')

with open('all_countries.txt', 'w') as file:
  file.write('export var countries: string[] = [\n')
  for i in range(0, len(imgs)):
    if i + 1 == len(imgs):
      file.write('  "{0}"\n'.format(country_names[i].text))
    else:
      file.write('  "{0}",\n'.format(country_names[i].text))
  file.write('];\n')
