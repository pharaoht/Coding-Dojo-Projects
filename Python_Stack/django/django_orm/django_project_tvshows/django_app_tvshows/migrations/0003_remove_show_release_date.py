# Generated by Django 2.2.4 on 2021-02-24 18:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('django_app_tvshows', '0002_auto_20210224_1255'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='show',
            name='release_date',
        ),
    ]
