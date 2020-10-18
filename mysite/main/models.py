from django.db import models

class Printer(models.Model):
    title= models.CharField("Title",max_length=40)
    description = models.CharField("Description",max_length=200)
    speed = models.IntegerField("Speed of movement")
    price = models.IntegerField("Price")
    date = models.DateTimeField("Date of publication")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return '/'