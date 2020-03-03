---
layout: post
title:  "use xml layout for ui designing"
date:   2020-02-07 12:41:02 +0530
categories: #android #ui
image: https://drive.google.com/file/d/1OfI2AIPFLItNHC9XxqL5nCTruG7lOcgD/view?usp=sharing
meta: Shape drawable is nothing more just a collection of .xml  file's with that you can create your own awesome Custom_Button as well as you can create more with that. 
---

 #hello_Cod3rs 
in this tutorial we will learn how we can use xml files to customize our own button
so open up android studio then we need to create a new resource file so for that we will go intro res > drawable then we will right click on the drawable folder and pick a new resources file from the new section the first option on the popup menu. as you can see below.

we will name this file as our button_default then we hit ok after that we will have our first button_default.xml file so for this example we'ill need three .xml file's but as for now we will work on this .xml file i will tell you  more as we go further in this tutorial.

button_default.xml

 we change the default attribute to shape and give it another attribute android:shape="rectangle"&gt; and then we add another attribute &lt;gradient in this we give end color and start color 

android:startColor="#0000ff"
android:endColor="#fff"

for our gradient effect then we give some padding and a stroke,Corner's as you can see below

    android:shape="rectangle"
    >
    &lt;gradient
        android:startColor="#0000ff"
        android:endColor="#fff"
        />
        &lt;padding
            android:bottom="7dp"
            android:top="7dp"
            android:right="7dp"
            android:left="7dp"/>
    &lt;stroke
        android:width="2dp"
        android:color="#9C27B0"/>

    &lt;corners android:radius="15dp"/>

after completing our default_button.xml we copy all the codes for our two other .Xml file's as i mentioned above so we go to our drawable folder again and create another resource file as button_disabled and we paste our code in it. then simply we change our color's to gray as you can see below (for creating a disabled effect).

## button_disabled.xml

    android:shape="rectangle"
    >


    &lt;solid
        android:color="#b6b7b5"
        />

        &lt;padding
            android:bottom="7dp"
            android:top="7dp"
            android:right="7dp"
            android:left="7dp"/>
    &lt;stroke
        android:width="2dp"
        android:color="#9C27B0"/>

    &lt;corners android:radius="15dp"/>

After that we create our 3rd resource file button_pressed.xml and again pase all code as we did earlier in the button_disabled.xml and just change the gradient color for a (pressed effect).
<!-- /wp:paragraph -->

android:startColor="#03A9F4"<br>android:endColor="#fff"</pre>

button_pressed.xml

    android:shape="rectangle"
    >


    &lt;gradient
        android:startColor="#03A9F4"
        android:endColor="#fff"
        />

        &lt;padding
            android:bottom="7dp"
            android:top="7dp"
            android:right="7dp"
            android:left="7dp"/>
    &lt;stroke
        android:width="2dp"
        android:color="#9C27B0"/>

    &lt;corners android:radius="15dp"/>


We have successfully created our all resources file for our shape drawable and now we have to attached all the resources file to a single .xml file for  we can call it in our project
we give it a name custom_button

custom_button.xml
in this xml we dont change the default attribute and in the selector we assign our button as you can see below</p>

        android:state_pressed="true"
        android:drawable="@drawable/button_pressed"/>
    &lt;item
        android:state_enabled="false"
        android:drawable="@drawable/button_disabled"/>
    &lt;item
        android:drawable="@drawable/button_default"/>
Finally we go into our Main Activity.xml and we add a button and set the background to our @drawable/custom_button and after doing this the system will take our three custom buttons as a one custom button and we will get our custom button background.then we set a switch for disable purpose. 

    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical"
    tools:context=".MainActivity">

    &lt;Button
        android:id="@+id/btn"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:paddingBottom="8dp"
        android:background="@drawable/custom_button"
        android:text="Press Me" />
   


    &lt;Switch
        android:id="@+id/btnSwitch"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:checked="true"
        android:text="Enabled"
        />

after assigning the button and switch we go to our main activity.java file for give a behavior for our  widgets.

## Main Activity.JAVA

        final Button customButton = findViewById(R.id.btn);
        Switch switchButton= findViewById(R.id.btnSwitch);

        customButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
               Toast.makeText(MainActivity.this,"clicked", Toast.LENGTH_LONG).show();


            }
        });

        switchButton.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton ButtonView, boolean isChecked) {
                if (isChecked) {
                    customButton.setEnabled(true);
                } else {
                    customButton.setEnabled(false);
                }
            }
        });
    }
}
We have successfully created our shape drawable button. So Let's Test it out!
So That's all for today cod3'rs i hope now you got a understanding of shape drawable and you can also use this method in your projects to create a awesome looking custom button.
if you like this tutorial then make sure stay tuned for future upcoming tutorials.