# simple-social
HTML/Javascript/CSS solution for adding social media share buttons to a Ruby on Rails project.

TailwindCSS (V2.2.4) is used in this example. If you are not using Tailwind, you'll need to manually add the properties to a CSS file or convert them to Bootstrap, etc.

The social media icons used are from LineIcon (V2). These properties will need to be changed if you are using a different version of LineIcons or a different icon provider (like FontAwesome).

This example DOES NOT include how to add TailwindCSS or LineIcons to your Rails project!

The show.html.erb shows how to prep the social variables and call the layout file that displays the buttons.

Three variables are passed from the model to the layout that generate the social buttons:
@social_url - the URL to use in the social media post.
@social_title - the Title to use for the social media post.
@social_type - optional variable in case you want to supress or change the behavior of the social buttons depending on the model displaying it.

Currently, simple-social supports Facebook, Twitter and Reddit. Other social media options can be added easily by including their posting URL and formatting in the \_social.html.erb file.

_Note: This example usese jQuery to listen for the onclick events. This can be done without jQuery by using addEventListener instead of jQuery's 'on'._

Social toggle closed

![image](https://user-images.githubusercontent.com/61164345/127722583-0a13e621-d873-47f5-9c05-5075f388cbf8.png)

Social toggle open

![image](https://user-images.githubusercontent.com/61164345/127722595-a5a75f53-e055-4069-9431-c87953e14bd4.png)

