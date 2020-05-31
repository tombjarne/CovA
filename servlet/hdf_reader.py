# -*- coding: utf-8 -*-
#!/usr/local/bin/python

from pyhdf import SD

# HDF file and SDS names
FILE_NAME = "MYD04_L2.A2013060.1300.051.2013062021359.hdf"
SDS_NAME  = "Optical_Depth_Land_And_Ocean"

# open the hdf file
hdf = SD.SD(FILE_NAME)

# select and read the sds data
sds = hdf.select(SDS_NAME)
data = sds.get()

# get dataset dimensions
nrows, ncols = data.shape  # data.shape: (3712, 3712) in the SEVIRI AER-OC example, 203
print data.shape # data.shape: (3712, 3712) in the SEVIRI AER-OC example, (203, 135)

i=200 # row index
j=125 # col index
print data[200,125]

# Terminate access to the data set
sds.endaccess()

# Terminate access to the SD interface and close the file
hdf.end()