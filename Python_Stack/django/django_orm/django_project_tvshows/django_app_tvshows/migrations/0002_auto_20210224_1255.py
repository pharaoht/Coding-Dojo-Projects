# Generated by Django 2.2.4 on 2021-02-24 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_app_tvshows', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='release_date',
            field=models.DateField(),
        ),
    ]
