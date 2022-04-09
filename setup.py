from setuptools import setup, find_packages
from os.path import join, isfile
from os import walk


def package_files(directories):
    paths = []
    for item in directories:
        if isfile(item):
            paths.append(join('..', item))
            continue
        for (path, directories, filenames) in walk(item):
            for filename in filenames:
                paths.append(join('..', path, filename))
    # print(paths)
    return paths


setup(
    name="tyadmin_api_cli",
    version="0.8.2",
    keywords=("pip", "mtianyan", "xadmin", "Django", "Antd", "Antd Design Pro"),
    description="modern base on models django admin powered by Antd Design Pro",
    long_description="modern base on models django admin powered by Antd Design Pro",
    license="MIT Licence",

    url="https://github.com/mtianyan/tyadmin_api_cli",
    author="mtianyan",
    author_email="mtianyan@qq.com",

    packages=find_packages(),
    package_data={
        '': package_files([
            'tyadmin_api_cli/antd_full_templates/',
            'tyadmin_api_cli/antd_page_templates/',
            'tyadmin_api_cli/tyadmin_api_init/'
        ])
    },
    platforms="any",
    install_requires=["django", "django-simple-captcha", "djangorestframework", "django-filter", "demjson3"]
)
