# coding: utf-8

"""
    CovA API

    Provides simple data about Covid19 // SpaceApps Hackathon 2020  # noqa: E501

    OpenAPI spec version: 1.0.0
    Contact: tom@fjellsson.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

from __future__ import absolute_import

import unittest

import swagger_client
from api.cov_a_user_api import CovAUserApi  # noqa: E501
from swagger_client.rest import ApiException


class TestCovAUserApi(unittest.TestCase):
    """CovAUserApi unit test stubs"""

    def setUp(self):
        self.api = api.cov_a_user_api.CovAUserApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_logfile(self):
        """Test case for create_logfile

        creates Logfile  # noqa: E501
        """
        pass

    def test_get_weather(self):
        """Test case for get_weather

        retrieves all available weather data  # noqa: E501
        """
        pass

    def test_send_user_data(self):
        """Test case for send_user_data

        sends in user data to prepare specific response  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
