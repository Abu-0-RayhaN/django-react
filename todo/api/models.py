from django.db import models

# Create your models here.


class todo(models.Model):
    task = models.CharField(max_length=20)

    def __str__(self):
        return self.task
