# Generated by Django 2.2.4 on 2021-02-23 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_app_authors', '0002_author_notes'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='desc',
            field=models.CharField(default='no info', max_length=500),
            preserve_default=False,
        ),
    ]