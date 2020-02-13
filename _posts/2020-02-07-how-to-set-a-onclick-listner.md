---
layout: post
title:  "On Click Change Activity"
date:   2020-02-07 12:41:02 +0530
categories: android
---
in this post you will learn how use OnClickListner in your .java project in Android studio
and open an activity  with that button using  OnClickListner  method


i have prepared an app example of the onclicklistner method So Lets quickly get to the Tutorial.


<strong>Main Activity.Xml</strong>
####XML code

```html

    <TextView
        android:id="@+id/tv1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentStart="true"
        android:layout_alignParentLeft="true"
        android:layout_alignParentTop="true"
        android:layout_alignParentEnd="true"
        android:layout_alignParentRight="true"
        android:layout_alignParentBottom="true"
        android:gravity="center_horizontal"
        android:shadowColor="#000A0505"
        android:text="Hello Coder's"
        android:textSize="40sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.431"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.123" />

    <TextView
        android:id="@+id/tv2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="this is activity 1"
        android:textSize="20sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.0"
        app:layout_constraintStart_toStartOf="@+id/tv1"
        app:layout_constraintTop_toBottomOf="@+id/tv1"
        app:layout_constraintVertical_bias="0.288" />

    <Button
        android:id="@+id/btn"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:background="#3F51B5"
        android:text="second Activity"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="@+id/tv2"
        app:layout_constraintHorizontal_bias="0.498"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/tv2"
        app:layout_constraintVertical_bias="0.565" />
```
<strong>Second Activity.Xml</strong>
####XML code

```html
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#090505"
    tools:context=".second_activity">

    <TextView
        android:id="@+id/tv"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="155dp"
        android:layout_marginLeft="155dp"
        android:layout_marginTop="165dp"
        android:layout_marginEnd="115dp"
        android:layout_marginRight="115dp"
        android:layout_marginBottom="419dp"
        android:background="#4CAF50"
        android:text="This is second activity!"
        android:textSize="40dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.581"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.514" />

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="60dp"
        android:layout_marginBottom="68dp"
        android:background="#4CAF50"
        android:text="Hello Coders"
        android:textSize="35sp"
        app:layout_constraintBottom_toTopOf="@+id/tv"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />
</androidx.constraintlayout.widget.ConstraintLayout>
```
<hr>
<strong>Main Activity.Java</strong>
####JAVA code


```java
package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
   //define variable here//

    private TextView txt1,txt2;

    private Button button;
   /* we have two variable here as yo can see above
   1.TextView as txt1 and txt2
   2.Button as button*/

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
      /*then we have to associate the corresponding id's
         to xml and java as you can see below*/


        txt1=(TextView)findViewById(R.id.tv1);
        txt2=(TextView)findViewById(R.id.tv2);
        button=(Button)findViewById(R.id.btn);

         //then we will ad a onClickListener to our button//

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                OpenSecond();
            }
        });

    }
    //we will create a method called  open second ();//

    public void OpenSecond(){
        Intent intent=new Intent(this,second_activity.class);
        startActivity(intent);
    }
}
       //this is the End of Main Activity//
```


<strong>Second Activity.Java</strong>
####JAVA code


```java
package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class second_activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.second_activity);
    }
}
   //That's is for Today's Tutorial Subscribe For more coding tips like this//
```
<hr>
