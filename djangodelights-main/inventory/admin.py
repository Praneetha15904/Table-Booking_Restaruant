from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(MenuItem)
admin.site.register(RecipeRequirement)
admin.site.register(Purchase)
admin.site.register(Ingredient)