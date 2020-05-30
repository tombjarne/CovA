from servlet.api import API as API

class Example:

    def static_init(self) -> None:
            return API.static_init()

    def get_todays_image(self) -> str:
        return API.get_image_of_day()

Example.static_init()
Example.get_todays_image()