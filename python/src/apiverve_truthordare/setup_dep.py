from setuptools import setup, find_packages

setup(
    name='apiverve_truthordare',
    version='1.1.13',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Truth or Dare generates random truth questions and dare challenges for the classic party game. Features 400+ unique prompts with per-API-key tracking to avoid repeats.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/truthordare?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
