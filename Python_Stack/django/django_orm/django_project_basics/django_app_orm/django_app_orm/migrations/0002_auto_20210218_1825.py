# Generated by Django 2.2.4 on 2021-02-18 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_app_orm', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='duration',
        ),
        migrations.AddField(
            model_name='movie',
            name='rating',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
