from django.urls import path

from . import views
app_name = 'agentFinder'


urlpatterns = [
    path('', views.index, name='index'),
    path('Selling/', views.selling, name='selling'),
    path('Buying/', views.buying, name='buying'),
    path('Seller_Info_Saved/', views.selling_forms_save, name='selling_forms_save'),
    path('Buyer_Info_Saved/', views.buying_forms_save, name='buying_forms_save'),
    path('saved/', views.namephoneinfo_save, name='namephoneinfo_save'),

]