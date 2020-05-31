#! /usr/bin/env python
# -*- coding: latin-1 -*-

###################################################################################################################################
#
# @file read_file_attribute.py
# @brief describes how to read an HDF4 file attribute, using the py_hdf_reader library
# @author Nicolas PASCAL (nicolas.pascal@icare.univ-lille1.fr), (C) Centre de Gestion et de Traitement de Données (CGTD) ICARE 2008
# @version 0.0.0
# @date 2008/04/07
#
# Copyright: See COPYING file that comes with this distribution
#
# History :
#   v0.0.0 : creation
#
###################################################################################################################################

from py_hdf_reader import *

__VERSION__="0.0.0"
__AUTHOR__="CGTD/UDEV Nicolas PASCAL (nicolas.pascal@icare.univ-lille1.fr)"

# path to the file to read
filename = "../data/test.hdf"
# name of a file attribute
file_attr_name = "Date"

#*********************************************/
#          READ A FILE ATTRIBUTE
#*********************************************/

print("*** Read file attribute %s ***\n"%file_attr_name)
# read its value
attr=get_file_attr(filename, file_attr_name)
# print it out
print(attr)
