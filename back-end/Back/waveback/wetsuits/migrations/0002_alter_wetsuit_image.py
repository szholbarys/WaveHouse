# Generated by Django 4.2 on 2023-05-03 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wetsuits', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wetsuit',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='wet_suits/'),
        ),
    ]
