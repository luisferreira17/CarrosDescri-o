import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const carros = [
  {
    id: '1',
    nome: 'Toyota Corolla',
    imagem: require('https://www.google.com/imgres?q=toyota%20corola&imgurl=https%3A%2F%2Fmedia.toyota.com.br%2F65ac5532-8fa0-4b0d-8960-53726d0ad9f4.jpeg&imgrefurl=https%3A%2F%2Fwww.toyota.com.br%2Fmodelos%2Fcorolla&docid=0pi8KtiYUJPnuM&tbnid=JTIajOdNK5nyaM&vet=12ahUKEwj83pyKjs6MAxVerZUCHZaGA0MQM3oECGgQAA..i&w=3046&h=1713&hcb=2&ved=2ahUKEwj83pyKjs6MAxVerZUCHZaGA0MQM3oECGgQAA'),
    descricao: 'O Toyota Corolla é um dos sedãs mais populares do mundo, conhecido por sua confiabilidade, conforto e ótimo consumo de combustível. É uma excelente escolha para famílias e profissionais.',
  },
  {
    id: '2',
    nome: 'Honda Civic',
    imagem: require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE279W7-VYW4fevxBa9C0oUnz_lSI-mepjxg&s'),
    descricao: 'O Honda Civic combina desempenho com um visual esportivo. É ideal para quem busca um carro estiloso, econômico e com boa revenda no mercado nacional.',
  },
  {
    id: '3',
    nome: 'Chevrolet Onix',
    imagem: require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-yBcgkouU3IjI5PWfnO8tQu3g1R6oYp9ng&s'),
    descricao: 'O Chevrolet Onix se destaca por seu ótimo custo-benefício. Com tecnologia embarcada e bom desempenho urbano, é uma opção perfeita para o dia a dia nas cidades.',
  },
  {
    id: '4',
    nome: 'Ford Ranger',
    imagem: require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauAUlcjpgOkB_Zy2SK3MLcRGvAaBV8IdFew&s'),
    descricao: 'A Ford Ranger é uma picape robusta, preparada para enfrentar terrenos difíceis. Seu design imponente agrada aos aventureiros e trabalhadores rurais.',
  },
  {
    id: '5',
    nome: 'Volkswagen T-Cross',
    imagem: require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzDqq8e858flL9LEpV7EYGYQL4hz6H9IAmw&s'),
    descricao: 'O Volkswagen T-Cross é um SUV compacto com bom espaço interno, design moderno e uma das melhores tecnologias de conectividade da categoria.',
  },
];

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Loja de Carros - Selecione um modelo</Text>

      {carroSelecionado ? (
        <View style={styles.detalhes}>
          <Image source={carroSelecionado.imagem} style={styles.imagemGrande} />
          <Text style={styles.nome}>{carroSelecionado.nome}</Text>
          <Text style={styles.descricao}>{carroSelecionado.descricao}</Text>
          <TouchableOpacity onPress={() => setCarroSelecionado(null)} style={styles.botaoVoltar}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={carros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setCarroSelecionado(item)} style={styles.item}>
              <Image source={item.imagem} style={styles.imagem} />
              <Text style={styles.nome}>{item.nome}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 20,
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 120,
    borderRadius: 10,
  },
  nome: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  detalhes: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imagemGrande: {
    width: 300,
    height: 180,
    borderRadius: 10,
  },
  descricao: {
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  botaoVoltar: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});
