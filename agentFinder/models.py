from django.contrib import admin
from django.db import models
# Create your models here.

class sellerInfo(models.Model):
    address = models.TextField()
    propertType = models.TextField()
    targetSale = models.TextField()
    SoonTime = models.TextField()
    name = models.TextField()
    phone = models.TextField()
    email = models.TextField()
    def __str__(self):
        return self.name

admin.site.register(sellerInfo)

class buyerInfo(models.Model):
    address = models.TextField()
    propertType = models.TextField()
    targetSale = models.TextField()
    SoonTime = models.TextField()
    name = models.TextField()
    phone = models.TextField()
    email = models.TextField()
    def __str__(self):
        return self.name

admin.site.register(buyerInfo)

class namephoneInfo(models.Model):
    name = models.TextField()
    phone = models.TextField()

    def __str__(self):
        return self.name

admin.site.register(namephoneInfo)