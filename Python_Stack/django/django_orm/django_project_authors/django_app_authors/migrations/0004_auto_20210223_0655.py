# Generated by Django 2.2.4 on 2021-02-23 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_app_authors', '0003_book_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='author',
            name='books',
            field=models.ManyToManyField(related_name='publish', to='django_app_authors.Book'),
        ),
    ]
